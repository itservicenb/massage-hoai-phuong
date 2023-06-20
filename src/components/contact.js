import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import Textfield from 'react-mdl/lib/Textfield';

import MediaQuery from 'react-responsive';

class Contact extends Component {
  render() {
    return(
      <div style= {{width: '100%', margin: 'auto'}}>

        <MediaQuery query="(min-device-width: 1224px)">
          <Grid className="contact-grid">
            <Cell col={12}>
              <Textfield
                  onChange={() => {}}
                  label="Enter your email..."
                  floatingLabel
                  style={{width: '50%'}}
              />
            </Cell>

            <Cell col={12}>
              <Textfield
                  onChange={() => {}}
                  label="Enter your message, hit 'Submit', and I'll get back to you as soon as possible!"
                  rows={3}
                  style={{width: '50%'}}
              />
            </Cell>
            <Cell col={12}>
              <Button raised colored ripple style={{width: '50%'}}>Submit</Button>
            </Cell>
          </Grid>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
          <Grid className="contact-grid">
            <Cell col={12}>
              <Textfield
                  onChange={() => {}}
                  label="Enter your email..."
                  floatingLabel
                  style={{width: '90%'}}
              />
            </Cell>

            <Cell col={12}>
              <Textfield
                  onChange={() => {}}
                  label="Enter your message, hit 'Submit', and I'll get back to you as soon as possible!"
                  rows={3}
                  style={{width: '90%'}}
              />
            </Cell>
            <Cell col={12}>
              <Button raised colored ripple style={{width: '90%'}}>Submit</Button>
            </Cell>
          </Grid>
        </MediaQuery>
      </div>
    )
  }
}

export default Contact;
