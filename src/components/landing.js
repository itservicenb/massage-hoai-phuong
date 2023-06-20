import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import MediaQuery from 'react-responsive';
import image from '../images/asset/image/Hoai.png';
// import Videos from '~/video/index';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img src={image} alt="avatar" className="avatar-img" />
                            <div className="banner-text">
                                <p>• Foot • & • Massage • </p>
                                <hr />
                                <p>
                                    <a href="#" to="facebook.com/hoaiphuongmassage">
                                        facebook.com/hoaiphuongmassage
                                    </a>
                                </p>
                            </div>
                        </Cell>
                    </Grid>
                </MediaQuery>

                <MediaQuery query="(max-device-width: 1224px)">
                    <Grid className="landing-grid-mobile">
                        <Cell col={12}>
                            <img src={image} alt="avatar" className="avatar-img-mobile" />
                            <div className="banner-text-mobile">
                                <h1>HOÀI PHƯƠNG</h1>
                                <hr />
                                <p>• Foot • & • Massage • </p>
                                <hr />
                                <p>
                                    <a href="#">facebook.com/hoaiphuongmassage</a>
                                </p>
                            </div>
                        </Cell>
                    </Grid>
                </MediaQuery>

                <div></div>
            </div>
        );
    }
}

export default Landing;
