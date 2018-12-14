import React, { Component } from 'react';
import Style from "./style.scss";
import {Link} from 'react-router-dom';

class Header extends Component {

    handleGoBack = () => {
        let gobf = this.props.goBackFun;
        if(gobf){
            gobf.go(-1);
        }
    }

    render() {
        const {headTitle, goBack, signinUp, children} = this.props;
        return(
            <header className={Style.header}>
                {goBack && (
                    <section className={Style.head_goback}  onClick={this.handleGoBack}>
                        <span>返回</span>
                    </section>
                )}
                {headTitle && (
                    <section className={Style.title_head}>
                        <span className="title_text">{headTitle}</span>
                    </section>
                )}
                {signinUp && (
                    <Link to={ '/login' } className={Style.head_login}>
                        <span className="login_span">登录|注册</span>
                    </Link>
                )}
                {children && (children)}
            </header>
        )
    }
}

export default Header;