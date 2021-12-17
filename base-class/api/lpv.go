package api

type LPVClient interface {
	GetLPVInfo() string
	Check() bool
}
