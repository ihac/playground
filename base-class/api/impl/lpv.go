package impl

type LPVClientImpl struct {
}

func NewLPVClientImpl() *LPVClientImpl {
	return &LPVClientImpl{}
}

func (l *LPVClientImpl) Check() bool {
	return true
}

func (l *LPVClientImpl) GetLPVInfo() string {
	return "LPVClientImpl"
}
