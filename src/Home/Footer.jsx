import React from "react";
import { Row, Col } from "antd";
import { footer } from "./data";
import { MailTwoTone } from "@ant-design/icons";
import icon_fb from "./static/SocialMedia/icon_fb.png";
import icon_in from "./static/SocialMedia/icon_in.png";
import icon_twitter from "./static/SocialMedia/icon_twitter.png";
// import logo_mop_white from "./static/SocialMedia/logo_mop_white.png";

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      <div className="footer-top">
        <div className="page">
          {/* <MailTwoTone /> */}

          <Row>
            <Col
              md={12}
              xs={24}
              style={{ textAlign: "left" }}
              className="mobile-hide"
            >
              {/* <MailTwoTone /> */}
              {/* <a
                href="https://weibo.com/p/1005056420205486"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "rgba(256, 256, 256, 0.9)", textAlign: "left" }}
              >
                Total Views: 1
              </a> */}
              Total Views: 1
            </Col>
            <Col md={12} xs={24}>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  About Us |
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  Organizational Chart |
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  Upload Documents |
                </a>
              </span>{" "}
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  RTI
                </a>
              </span>
              {/* <span style={{ marginRight: 24 }} className="mobile-hide">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  GRID-INDIA WEBSITE
                </a>
              </span> */}
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-wrap page">
        <Row>
          {footer.map((foot, index) => (
            <Col
              key={index.toString()}
              md={12}
              xs={24}
              className="footer-item-col"
            >
              <div className="footer-item">
                <h2>
                  {foot.icon && (
                    <img
                      style={{ marginRight: 16 }}
                      src={foot.icon}
                      alt="img"
                    />
                  )}
                  {foot.title}
                </h2>
                {foot.children.map((child) => (
                  <div key={child.link}>
                    <a target="_blank " href={child.link}>
                      {child.title}
                      {child.desc && (
                        <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                          {" "}
                          - {child.desc}
                        </span>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </Col>
          ))}
          <div key="SocialMedia">
            <a href="https://www.facebook.com/GridIndia1" target="_blank">
              <img src={icon_fb} alt="icon_fb" />
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/company/power-system-operation-corporation-ltd"
              target="_blank"
            >
              <img src={icon_in} alt="icon_in" />
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/GridIndia1" target="_blank">
              <img src={icon_twitter} alt="icon_twitter" />
            </a>
          </div>
        </Row>
      </div>
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col
              md={6}
              xs={24}
              style={{ textAlign: "left" }}
              className="mobile-hide"
            >
              NCW Women's HelpLine - 7827170170{" "}
            </Col>
            <Col
              md={6}
              xs={24}
              style={{ textAlign: "left" }}
              className="mobile-hide"
            >
              {/* <MailTwoTone /> */}
              <a
                href="https://www.google.com"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "rgba(256, 256, 256, 0.9)", textAlign: "left" }}
              >
                Feedback & Grievance{" "}
              </a>
            </Col>

            <Col md={12} xs={24}>
              <span style={{ marginRight: 12 }}>
                Copyright © 2024 Eastern Regional Load Despatch Centre (ERLDC)
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
