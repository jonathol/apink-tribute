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

  }


  isActiveSlide(n) {
    return "my-slides img-responsive center-block img-thumbnail animated fadeIn " + (n === this.state.slideIndex ? "active-slide" : "inactive-slide");
  }

  isActiveButton(n) {
    return "slides-button " + ( n === this.state.slideIndex ? "active-button" : "");
  }

  render () {
    return(
      <div className="slides-container">
        <img className={this.isActiveSlide(1)} src="http://pm1.narvii.com/5731/8e0360738df224ec5edfa1296ab311fcaaae85e9_hq.jpg" />
        <img className={this.isActiveSlide(2)} src="http://pm1.narvii.com/6281/2c0862a6c693465aec641b3ee85852bc8c44d177_hq.jpg" />
        <img className={this.isActiveSlide(3)} src="https://s-media-cache-ak0.pinimg.com/736x/87/a7/11/87a71154d3995580afa667f69669fdf6.jpg" />
        <img className={this.isActiveSlide(4)} src="https://s-media-cache-ak0.pinimg.com/736x/25/0f/a6/250fa61c6416a8f42ec32b9de0813d24.jpg" />


        <div className="slides-nav">
          <div className="slides-arrow" onClick={this.plusDivs.bind(this,-1)}>&#10094;</div>

          <div className="button-container">
            <span className={this.isActiveButton(1)} onClick={this.currentDiv.bind(this,1)}></span>
            <span className={this.isActiveButton(2)} onClick={this.currentDiv.bind(this,2)}></span>
            <span className={this.isActiveButton(3)} onClick={this.currentDiv.bind(this,3)}></span>
            <span className={this.isActiveButton(4)} onClick={this.currentDiv.bind(this,4)}></span>
          </div>

          <div className="slides-arrow" onClick={this.plusDivs.bind(this,1)}>&#10095;</div>
        </div>

      </div>
    );
  }
}
