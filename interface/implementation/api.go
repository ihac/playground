package impl

import (
	"fmt"

	"github.com/ihac/playground/interface/api"
)

type APIImpl struct{}

var _ api.API = &APIImpl{}
var _ api.APIV1 = &APIImpl{}

func New() *APIImpl {
	return &APIImpl{}
}

func (a *APIImpl) Do() {
	fmt.Println("Do() in APIImpl")
}

func (a *APIImpl) Do1() {
	fmt.Println("Do1() in APIImpl")
}
