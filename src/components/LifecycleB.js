import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Joshua'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecyclB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB ComponentDidUpdate')
    }

  render() {
    console.log('LifecycleB render')
    return <div>Lifecycle B</div>
  }
}

export default LifecycleB
