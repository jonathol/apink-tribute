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
    if (this.state.slideIndex + n > this.state.slideLength) {
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
    return "my-slides img-responsive center-block " + (n === this.state.slideIndex ? "active-slide" : "inactive-slide");
  }

  render () {
    return(
      <div className="slides-container">
        <img className={this.isActiveSlide(1)} src="http://www.ktown4u.com/goods_files/SH0164/goods_images/000021/GD00020259.default.1.jpg" />
        <img className={this.isActiveSlide(2)} src="https://pbs.twimg.com/media/CKvF6O0UsAAxzjt.jpg" />
        <img className={this.isActiveSlide(3)} src="https://s-media-cache-ak0.pinimg.com/736x/87/a7/11/87a71154d3995580afa667f69669fdf6.jpg" />
        <img className={this.isActiveSlide(4)} src="https://s-media-cache-ak0.pinimg.com/736x/25/0f/a6/250fa61c6416a8f42ec32b9de0813d24.jpg" />


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
