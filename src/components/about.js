import React, {Component} from 'react';
import {Card, CardText, CardTitle, Grid, Cell,
        CardActions,  Button} from 'react-mdl';
import MediaQuery from 'react-responsive';

class About extends Component {
  render() {
    return(

        <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <Grid>
            <Cell col={12}>
                <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background1.png?raw=true) center / cover'}}>About Lauren</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo sem, scelerisque maximus dignissim eget, egestas dapibus felis. Nullam orci nisl, ultricies a ultrices ac, convallis a metus. Aliquam erat volutpat. Praesent sit amet elit vitae dolor cursus sollicitudin. Nulla odio ipsum, molestie condimentum orci eget, varius interdum est. Ut.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={12}>
                <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background2.png?raw=true) center / cover'}}>What you'll be getting</CardTitle>
                  <CardText>
                      Lauren combines her training in deep tissue, myofascial and muscle energy techniques to bring the perfect balance of relaxation and therapeutic treatment to massage.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={12}>
                <Card shadow={0} style={{width: '50%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background3.png?raw=true) center / cover'}}>Certification</CardTitle>
                  {/* <CardText>
                    As I am a certified, massage therapist, I've uploaded a picture of my certificate for your convenience! You can go ahead and download it below 🎉
                  </CardText> */}
                <CardActions border>
                    <Button colored ripple>Download Certification</Button>
                </CardActions>
                </Card>
            </Cell>
          </Grid>
        </MediaQuery>

        
        <MediaQuery query="(max-device-width: 1224px)">
          <Grid>
            <Cell col={12}>
                <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background1.png?raw=true) center / cover'}}>About Lauren</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo sem, scelerisque maximus dignissim eget, egestas dapibus felis. Nullam orci nisl, ultricies a ultrices ac, convallis a metus. Aliquam erat volutpat. Praesent sit amet elit vitae dolor cursus sollicitudin. Nulla odio ipsum, molestie condimentum orci eget, varius interdum est. Ut.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={12}>
                <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background2.png?raw=true) center / cover'}}>What you'll be getting</CardTitle>
                  <CardText>
                      Lauren combines her training in deep tissue, myofascial and muscle energy techniques to bring the perfect balance of relaxation and therapeutic treatment to massage.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={12}>
                <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/background3.png?raw=true) center / cover'}}>Certification</CardTitle>
                  {/* <CardText>
                    As I am a certified, massage therapist, I've uploaded a picture of my certificate for your convenience! You can go ahead and download it below 🎉
                  </CardText> */}
                <CardActions border>
                    <Button colored ripple>Download Certification</Button>
                </CardActions>
                </Card>
            </Cell>
          </Grid>
        </MediaQuery>
      </div>
    )
  }
}

export default About;
