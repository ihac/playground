package main

import (
	"github.com/ihac/playground/interface/api"
	impl "github.com/ihac/playground/interface/implementation"
)

func inject(a api.API) {
	a.Do()
}

func main() {
	client := impl.New()
	inject(client)
}
