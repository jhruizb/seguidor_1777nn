basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.White) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.Black)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 20)
    } else if (mbit_Robot.Line_Sensor(mbit_Robot.enPos.LeftState, mbit_Robot.enLineState.Black) && mbit_Robot.Line_Sensor(mbit_Robot.enPos.RightState, mbit_Robot.enLineState.White)) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 20)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
