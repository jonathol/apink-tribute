import React from "react";

export default class Slide extends React.Component {
  constructor() {
    super();

    this.state = {
      slideIndex: 1,
      slideLength: 0
    };

  }

  componentDidMount() {
    var x = document.getElementsByClassName("my-slides");

    this.setState({
      slideLength: x.length
    })
  }

  plusDivs(n) {
    var current;
    if (this.state.slideIndex + n == this.state.slideLength) {
      current = 1;
    } else if (this.state.slideIndex + n < 1) {
      current = this.state.slideLength;
    } else {
      current = this.state.slideIndex + n;
    }
    this.setState({
      slideIndex: current
    });
    //showDivs(this.state.slideIndex);
  }

  currentDiv(n) {
    this.setState({
      slideIndex: n
    });
    showDivs(this.state.slidIndex);
  }
/*
  showDivs(n) {
    var x = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length){
      this.setState({
        slideIndex: 1
      });
    }
    if (n < 1) {
      this.setState({
        slideIndex: x.length,
      });
    }
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.state.slideIndex-1].style .display = "block";
  }
*/

  isActiveSlide(n) {
    return "my-slides " + (n === this.state.slideIndex ? "active-slide" : "inactive-slide");
  }

  render () {
    return(
      <div className="content display-container text-center">
        <img className={this.isActiveSlide(1)} src="https://s-media-cache-ak0.pinimg.com/564x/69/70/2b/69702b54de24f269a04b5309f34e6f75.jpg" alt="Seven Springs of Apink album cover"/>
        <img className={this.isActiveSlide(2)} src="https://upload.wikimedia.org/wikipedia/en/5/59/SnowPink.jpg" alt="Snow Pink album cover"/>
        <img className={this.isActiveSlide(3)} src="https://kpopcolorcodedlyrics.files.wordpress.com/2012/05/une-annee.jpg" alt="Une Année album cover"/>
        <img className={this.isActiveSlide(4)} src="http://st.cdjapan.co.jp/pictures/l/16/32/NEOIMP-8097.jpg" alt="Secret Garden album cover"/>
        <img className={this.isActiveSlide(5)} src="https://upload.wikimedia.org/wikipedia/en/e/e9/PinkBlossom.jpg" alt="Pink Blossom album cover"/>
        <img className={this.isActiveSlide(6)} src="http://www.allkpop.com/upload/2014/11/af_org/A-Pink_1417009986_af_org.jpg" alt="Pink Luv of Apink album cover"/>
        <img className={this.isActiveSlide(7)} src="http://www.allkpop.com/upload/2015/07/af_org/A-Pink_1437252372_af_org.jpg" alt="Pink Memory album cover"/>
        <img className={this.isActiveSlide(8)} src="https://upload.wikimedia.org/wikipedia/en/1/1e/Pink_Revolution_Cover.png" alt="Pink Revolution album cover"/>

        <div className="">
          <div className="" onClick={this.plusDivs.bind(this,-1)}>&#10094;</div>
          <div className="" onClick={this.plusDivs.bind(this,1)}>&#10095;</div>
          <span className="demo" onClick={this.currentDiv.bind(this,1)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,2)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,3)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,4)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,5)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,6)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,7)}></span>
          <span className="demo" onClick={this.currentDiv.bind(this,8)}></span>
        </div>

      </div>
    );
  }
}
