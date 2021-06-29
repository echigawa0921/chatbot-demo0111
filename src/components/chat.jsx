import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Chat = (props) => {


    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : '.p-chat__reverse';

    return(
        <ListItem className={classes}>
          <ListItemAvatar>
            <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <div className="p-chat__bubble">
              {props.text}
          </div>

        </ListItem>
      )
    }

export default Chat