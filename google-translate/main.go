package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"os"

	"cloud.google.com/go/translate"
	"golang.org/x/text/language"
)

var (
	inputFilePath  = flag.String("input", "./assets/english.json", "input file path")
	targetLanguage = flag.String("target", "ar", "target language")
)

func LoadEnglishText(filePath string) (map[string]string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}

	content, err := io.ReadAll(file)
	if err != nil {
		return nil, err
	}

	var textMap map[string]string
	err = json.Unmarshal(content, &textMap)
	if err != nil {
		return nil, err
	}
	return textMap, nil
}

func TranslateText(textMap map[string]string, targetLanguage string) (map[string]string, error) {
	ctx := context.Background()
	lang, err := language.Parse(targetLanguage)
	if err != nil {
		return nil, fmt.Errorf("language.Parse: %v", err)
	}

	client, err := translate.NewClient(ctx)
	if err != nil {
		return nil, err
	}
	defer client.Close()

	var textList []string
	var keyList []string
	for key, text := range textMap {
		textList = append(textList, text)
		keyList = append(keyList, key)
	}

	resp, err := client.Translate(ctx, textList, lang, nil)
	if err != nil {
		return nil, fmt.Errorf("Translate: %v", err)
	}

	translated := make(map[string]string)
	for i := range keyList {
		if i >= len(resp) {
			return nil, fmt.Errorf("Translate returned less translations than expected")
		}
		translated[keyList[i]] = resp[i].Text
	}
	return translated, nil
}

func main() {
	flag.Parse()

	textMap, err := LoadEnglishText(*inputFilePath)
	if err != nil {
		fmt.Printf("failed to load english text: %v\n", err)
		return
	}

	translated, err := TranslateText(textMap, *targetLanguage)
	if err != nil {
		fmt.Printf("failed to translate text: %v\n", err)
		return
	}

	bytes, err := json.MarshalIndent(translated, "", "  ")
	if err != nil {
		fmt.Printf("failed to marshal translated text: %v\n", err)
		return
	}

	fmt.Printf("Translation:\n%s\n", string(bytes))
}
