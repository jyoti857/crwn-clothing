import React from 'react';
import './directory.scss';
import {MenuItems} from '../menu-items';
import {connect} from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

// const Directory =(props, {sections}) =>{
  const Directory = (props) =>{
   console.log("*$#($*#((FROM Directory --->", props);
    return(
        <div className = 'directory-menu'>
            {props.sections.map(({title, id, imageUrl, size}) => {
                return<MenuItems  key = {id} title={title} imageUrl={imageUrl} size={size}/>
            })}
        </div>
    )
}
const mapStateToProps = state =>({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps, null)(Directory);