package main

import (
	"technicaltest/handlers/productHandler"
	"technicaltest/models"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	models.ConnectionDatabase()

	r.GET("/api/products", productHandler.Index)
	r.GET("/api/product/:id", productHandler.Show)
	r.POST("/api/product", productHandler.Create)
	r.PATCH("/api/product/:id", productHandler.Update)
	r.DELETE("/api/product/:id", productHandler.Delete)

	r.Run()
}
