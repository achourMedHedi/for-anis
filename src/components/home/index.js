import { connect } from 'react-redux'
import { toggleSpinAnimation, addItemOperation, deleteItemOperation } from './duck/operations'

import Home from './Home'

const mapStateToProps = ({ home }) => ({ home })
const mapDispatchToProps = { toggleSpinAnimation, addItemOperation, deleteItemOperation }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
