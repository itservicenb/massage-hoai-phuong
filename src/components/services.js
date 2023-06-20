import React, {Component} from 'react';
import {Card, CardText, CardTitle, Grid, Cell} from 'react-mdl';

import MediaQuery from 'react-responsive';

class Services extends Component {
  render() {
    return(
      
      <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <Grid>
          <Cell col={12}>
              <Card shadow={0} style={{width: '30%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/deeptissue.jpg?raw=true) center / cover'}}>Deep Tissue Massage</CardTitle>
                <CardText>
                  Deep tissue massage therapy is similar to Swedish massage, but the deeper pressure is beneficial in releasing chronic muscle tension. The focus is on the deepest layers of muscle tissue, tendons and fascia (the protective layer surrounding muscles, bones and joints).
                </CardText>
              </Card>
            </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '30%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/swedish.jpeg?raw=true) center / cover'}}>Swedish Massage</CardTitle>
                <CardText>
                  Swedish massage therapy is the modality that comes to mind when most people think about massage. As the best-known type of bodywork performed today, one of the primary goals of the Swedish massage technique is to relax the entire body. This is accomplished by rubbing the muscles with long gliding strokes in the direction of blood returning to the heart. But Swedish massage therapy goes beyond relaxation. Swedish massage is exceptionally beneficial for increasing the level of oxygen in the blood, decreasing muscle toxins, improving circulation and flexibility while easing tension.
                </CardText>
              </Card>
          </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '30%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/sports.jpg?raw=true) center / cover'}}>Sports Massage</CardTitle>
                <CardText>
                  Sports massage therapy is geared toward athletes of every kind, from world-class professionals to weekend joggers. The particulars of the sports massage technique are specific to the athlete's sport of choice. Focusing on areas of the body that are overused and stressed from repetitive and often aggressive movements.
                </CardText>
              </Card>
          </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '30%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/reflexology.jpeg?raw=true) center / cover'}}>Reflexology</CardTitle>
                <CardText>
                  Reflexology massage can be a deeply relaxing and therapeutic modality for those suffering from plantar fasciitis, ankle injuries or even everyday work and play.
                </CardText>
              </Card>
          </Cell>
        </Grid>
      </MediaQuery>


      <MediaQuery query="(max-device-width: 1224px)">
        <Grid>
          <Cell col={12}>
              <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/deeptissue.jpg?raw=true) center / cover'}}>Deep Tissue Massage</CardTitle>
                <CardText>
                  Deep tissue massage therapy is similar to Swedish massage, but the deeper pressure is beneficial in releasing chronic muscle tension. The focus is on the deepest layers of muscle tissue, tendons and fascia (the protective layer surrounding muscles, bones and joints).
                </CardText>
              </Card>
            </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/swedish.jpeg?raw=true) center / cover'}}>Swedish Massage</CardTitle>
                <CardText>
                  Swedish massage therapy is the modality that comes to mind when most people think about massage. As the best-known type of bodywork performed today, one of the primary goals of the Swedish massage technique is to relax the entire body. This is accomplished by rubbing the muscles with long gliding strokes in the direction of blood returning to the heart. But Swedish massage therapy goes beyond relaxation. Swedish massage is exceptionally beneficial for increasing the level of oxygen in the blood, decreasing muscle toxins, improving circulation and flexibility while easing tension.
                </CardText>
              </Card>
          </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/sports.jpg?raw=true) center / cover'}}>Sports Massage</CardTitle>
                <CardText>
                  Sports massage therapy is geared toward athletes of every kind, from world-class professionals to weekend joggers. The particulars of the sports massage technique are specific to the athlete's sport of choice. Focusing on areas of the body that are overused and stressed from repetitive and often aggressive movements.
                </CardText>
              </Card>
          </Cell>
          <Cell col={12}>
              <Card shadow={0} style={{width: '90%', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '150px', background: 'url(https://github.com/jdleo/Lauren-Massage-Therapy/blob/master/src/images/reflexology.jpeg?raw=true) center / cover'}}>Reflexology</CardTitle>
                <CardText>
                  Reflexology massage can be a deeply relaxing and therapeutic modality for those suffering from plantar fasciitis, ankle injuries or even everyday work and play.
                </CardText>
              </Card>
          </Cell>
        </Grid>
      </MediaQuery>
      </div>
    )
  }
}

export default Services;
