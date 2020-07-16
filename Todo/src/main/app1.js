import React from 'react';
import Listy from'./Listi';
import PropTypes from  'prop-types';

const styles = {
    ul: {
      padding: '1rem',
      listStyle: 'none'
    }
  }

function TDList({todos,onTogle}){
    return(
        <ul style={styles.ul}>
            {todos.map((td,index) =>{return <Listy text={td} key ={td.id_do} index = {index} onChange = {onTogle}/>})}
        </ul>
    )
}

TDList.propTypes = {
    todos: PropTypes.array
}

export default TDList;