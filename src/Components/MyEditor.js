import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createMathjaxPlugin from 'draft-js-mathjax-plugin'

const mathjaxPlugin = createMathjaxPlugin(/* optional configuration object */)

const plugins = [
  mathjaxPlugin,
]

export default class MyEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render() {
    return (
        <div>
            <p><em>This is a plugin for the <code>draft-js-plugins-editor</code>.</em></p>
            <p>It uses the traditional <code>$</code> key to insert inline math and <code>CTRL+M</code> for block one. (Type <code>\$</code> to insert the <code>$</code> character)</p>
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                plugins={plugins}
            />
        </div>
    )
  }
}