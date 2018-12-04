import { connect } from 'react-redux'
import { withReducer } from 'react-redux-dynamic-reducer'

import reducer from './duck/reducer'
import { sampleOperation } from './duck/operations'
import Todolist from './Todolist'

const mapStateToProps = ({ todolist }) => ({ todolist })
const mapDispatchToProps = { sampleOperation }

const componentWithReducer = withReducer(reducer, 'todolist', { namespaceActions: false })(Todolist)
export default connect(mapStateToProps, mapDispatchToProps)(componentWithReducer)
