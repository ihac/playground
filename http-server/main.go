package main

import (
	"fmt"
	"io"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(corsMiddleware())
	r.POST("/test", func(c *gin.Context) {
		t := time.Now()
		body, err := read2(c.Request.Body)
		fmt.Printf("Duration: %dms\n", time.Since(t).Milliseconds())

		if err != nil {
			fmt.Printf("ReadAll: %v\n", err)
			c.AbortWithStatusJSON(400, gin.H{"error": err.Error()})
			return
		}
		c.JSON(200, gin.H{"body": string(body)})
	})
	r.Run(":9090")
}
func corsMiddleware() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	config.AllowCredentials = true
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}
	return cors.New(config)
}

func read1(reader io.ReadCloser) ([]byte, error) {
	return io.ReadAll(reader)
}

func read2(reader io.ReadCloser) ([]byte, error) {
	var buf [1024]byte
	var res []byte
	for {
		n, err := reader.Read(buf[:])
		if n > 0 {
			fmt.Printf("Read: %s\n", string(buf[:n]))
			res = append(res, buf[:n]...)
		}
		if err != nil {
			if err == io.EOF {
				return res, nil
			}
			return nil, err
		}
	}
}
