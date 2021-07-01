import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Textinput from './Textinput'
import DialogTitle from '@material-ui/core/DialogTitle';
import { timeout } from 'q';

export default class FormDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }

        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)
    }

    inputName = (event) => {
        this.setState({name: event.target.value})
    }

    inputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    inputDescription = (event) => {
        this.setState({description: event.target.value})
    }



 
    render() {
        return(
            <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
            <DialogContent>
              <Textinput 
                label={"お名前（必須）"} multiline={false} rows={1}
                value={this.state.name} type={"text"} onChange={this.inputName}
                />
                <Textinput 
                label={"メールアドレス（必須）"} multiline={false} rows={1}
                value={this.state.email} type={"email"} onChange={this.inputEmail}
                />

               <Textinput 
                label={"お問い合わせ内容（必須）"} multiline={true} rows={5}
                value={this.state.description} type={"text"} onChange={this.inputDescription}
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.props.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        )
    }
}