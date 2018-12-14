import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { map } from 'underscore';

import Style from './style.scss';
import {Header} from '../../components';
import {Elm} from '../../service';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            guessCity: '',
            guessCityid: '',
            hotCity: [],
            groupCity: {}
        }
    }

    componentDidMount(){
        this.handleGetCityGuess();
        this.handleGetHotCity();
        this.handleGetGroupCity();
    }

    handleGetCityGuess = () => {
        Elm.cityGuess({
            type:'guess'
        }).then(res => {
            this.setState({
                guessCity: res.name,
                guessCityid: res.id
            })
        });
    }

    handleGetHotCity = () => {
        Elm.hotCity({
            type:'hot'
        }).then(res => {
            this.setState({
                hotCity: res
            })
        });
    }

    handleGetGroupCity = () => {
        Elm.groupCity({
            type:'group'
        }).then(res => {
            this.setState({
                groupCity: res
            })
        });
    }

    sortGroupCity = () => {
        let sortObj = {};
        let {groupCity} = this.state;
        if(!Object.keys(groupCity).length) return;
        for (let i = 65; i <= 90; i++) {
            if (groupCity[String.fromCharCode(i)]) {
                sortObj[String.fromCharCode(i)] = groupCity[String.fromCharCode(i)];
            }
        }
        return sortObj;
    }

    render() {
        let { hotCity, guessCityid, guessCity, groupCity}  = this.state;
        return (
            <div className={Style.wrapper}>
                <Header signinUp='home'>
                    <span className={Style.head_logo}>elm</span>
                </Header>
                <nav className={Style.city_nav}>
                    <div className={Style.city_tip}>
                        <span>但前定位城市：</span>
                        <span>定位不准时，请在城市列表中选择</span>
                    </div>
                    <Link to={'/city/' + guessCityid} className={Style.guess_city}>
                        <span>{guessCity}</span>
                    </Link>
                </nav>
                <section className={Style.hot_city_container}>
                    <h4 className={Style.city_title}>热门城市</h4>
                    <ul className={Style.citylistul}>
                        {hotCity.map((item) => {
                            return(
                                <Link to={'/city/' + item.id} key={item.id}>
                                    <li>{item.name}</li>
                                </Link>
                            )
                        })}
                    </ul>
                </section>
                <section className={Style.group_city_container}>
                    <ul className={Style.letter_classify}>
                        {
                            map(this.sortGroupCity(), (value, key) => {
                                return (
                                    <li className={Style.letter_classify_li} key={key}>
                                        <h4 className={Style.city_title}>
                                            {key}
                                            {key === 'A'? <span>（按字母排序）</span>: ''}
                                        </h4>
                                        <ul className={Style.groupcity_name_container}>
                                            {
                                                value.map((item) => {
                                                    return(
                                                        <Link to={'/city/' + item.id} key={item.id}>
                                                            <li>{item.name}</li>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
}

export default Home;
