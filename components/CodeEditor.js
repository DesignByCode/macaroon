import React, { useEffect } from 'react'

const CodeEditor = ({ children }) => {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  )
}

export default CodeEditor
