import "rc-banner-anim/assets/index.css";
import React from "react";
import QueueAnim from "rc-queue-anim";
import BannerAnim from "rc-banner-anim";
import { Button } from "antd";
import { banner } from "./data";
import { Row, Col } from "antd";
// import ReactPlayer from "react-player";

// import { FacebookEmbed } from "react-social-media-embed";
// import LatestNews from "./LatestNews";

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  getDuration = (e) => {
    if (e.key === "map") {
      return 800;
    }
    return 1000;
  };
  render() {
    const { isMobile } = this.props;
    const bannerChildren = banner.map((item, i) => {
      const children = item.children.map((child, ii) => {
        const tag = child.tag === "button" ? "div" : child.tag || "p";
        const childrenToRender =
          child.tag === "button" ? (
            <div>
              <Button>
                <a href={child.link} target="_blank">
                  {child.children}
                </a>
              </Button>{" "}
            </div>
          ) : (
            child.children
          );
        return React.createElement(
          tag,
          {
            key: ii.toString(),
            className: child.className,
            style: child.style || {},
          },
          childrenToRender
        );
      });
      return (
        <Element key={i.toString()}>
          <BgElement
            key="bg"
            className="banner-bg"
            style={{
              backgroundImage: `url(${isMobile ? item.imgMobile : item.img})`,
            }}
          />
          <QueueAnim
            key="text"
            className={item.className}
            ease={["easeOutCubic", "easeInQuad"]}
            type={item.queueAnim || "bottom"}
          >
            {children}
          </QueueAnim>
        </Element>
      );
    });
    return (
      <div className="banner page-wrapper">
        <div className="page">
          <div className="logo" />

          <Row>
            <Col
              md={24}
              xs={24}
              style={{ textAlign: "left" }}
              className="mobile-hide"
            >
              <BannerAnim type="across" duration={550} ease="easeInOutQuint">
                {bannerChildren}
              </BannerAnim>
            </Col>
            {/* <Col md={6} xs={24}>
              <iframe
                style={{ border: "none", overflow: "hidden" }}
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&amp;tabs=timeline&amp;width=250&amp;height=410&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                width="100%"
                height="410"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </Col> */}
          </Row>
        </div>
      </div>
    );
  }
}

export default Banner;
