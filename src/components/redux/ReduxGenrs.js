
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGenrsError, getGenrs, getGenrsPending } from '../../store/reducers';
import fetchGenrs from '../../store/actions/fetchGenrs';
// import GenerCard from '../GenerCard';

class ReduxGenrs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genrs: props.genrs
    }
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const {fetchGenrs} = this.props;
    fetchGenrs();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if(this.pending === false) return false;
    return true;
  }


render() {
  const {genrs} = this.props;
  if(!this.shouldComponentRender()) return 'Loading...'

  return (
      <div className='product-list-wrapper'>
        {genrs.map(data => {
          // <GenerCard data={data} />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: getGenrsError(state),
  genrs: getGenrs(state),
  pending: getGenrsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGenrs: fetchGenrs
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxGenrs);
