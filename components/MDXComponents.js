import react from 'react'
const h1 = (props) => <h1 className="font--size-super" {...props} />
const h2 = (props) => <h2 className="font--size-xxxl" {...props} />
const h3 = (props) => <h3 className="font--size-xl" {...props} />
const h4 = (props) => <h4 className="font--size-lg" {...props} />
const h5 = (props) => <h5 className="font--size-md" {...props} />
const h6 = (props) => <h6 className="font--size-sm" {...props} />

const MDXComponents = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
export default MDXComponents
