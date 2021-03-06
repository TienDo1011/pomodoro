import React, { Component } from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';

class Clock extends Component {

  constructor() {
    super()
    this._setActivityType = this._setActivityType.bind(this)
  }

  _setActivityType(e) {
    const p = this.props
    p.setActivityType(e.currentTarget.innerText.toLowerCase())
  }

  render() {
    const p = this.props
    let activityType = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
    let time = p.timer.time || activityType
    const mins = Math.floor(time / 60)
    const secs = (time % 60)
    const color = (p.activity_type == "p") ? "success" : "warning"
    const pomodoreIsActive = (p.activity_type == "p") ? "success" : "default"
    const breakIsActive = (p.activity_type == "b") ? "success" : "default"
    return (
      <section>
        <Row>
          <br />
          <Col xsOffset={4} xs={2}>
            <Button bsSize="lg" bsStyle={color}>{mins}:{secs}</Button>
          </Col>
          <Col xs={2}>
            <ButtonGroup vertical>
              <Button bsSize="xs" bsStyle={pomodoreIsActive} onClick={this._setActivityType}>P</Button>
              <Button bsSize="xs" bsStyle={breakIsActive} onClick={this._setActivityType}>B</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Clock
