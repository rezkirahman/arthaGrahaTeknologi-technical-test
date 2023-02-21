package models

type Product struct {
	Id          int    `gorm:"primaryKey" json:"id"`
	Nama        string `gorm:"type:varchar(300)" json:"name"`
	Description string `gorm:"type:varchar(300)" json:"description"`
}
