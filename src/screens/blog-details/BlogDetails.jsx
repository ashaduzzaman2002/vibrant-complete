import React from "react";
import "./blog-details.css";
import Layout from "../../layout/Layout";
import { HeroSecondary } from "../../components";
import { Calender, Comment } from "../../assets/SVG";

const BlogDetails = () => {
  return (
    <Layout>
      <HeroSecondary title={"Blog"} />
      <div className="container my-5">
        <h1 className="text-center page-heading">Our Vibrant Blogs</h1>
        <p className="text-center page-sub-heading">
          Our knowledge space, where Vibrants Insurance’s experts write about
          the ongoing trends and share their opinions on various topics from the
          industries.
        </p>

        <div className="row blog-details-containter">
        <div className="col-lg-6 d-lg-none mb-4 blog-details-image">
            <div>
                <img src="/image/blog1.jpg" alt="blog1" />
            </div>

            <div>
                <img src="/image/blog2.jpg" alt="blog1" />
            </div>
          </div>

          <div className="col-lg-6">
            <h3>How To Get The Most Our Of Your Health Insurance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a aliquam ante, blandit interdum magna. Vestibulum
              orci nisi, feugiat id lorem sit amet, aliquam viverra velit. Donec
              eget diam sapien. Phasellus molestie tempor erat, in pulvinar
              sapien ornare vel. Nullam vel velit condimentum, tincidunt turpis
              quis, convallis nibh. In hac habitasse platea dictumst.
              Pellentesque fermentum odio id ultricies maximus. Aliquam posuere
              dui eros, non bibendum sapien aliquam non. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Fusce magna neque, porttitor vitae fermentum vel, feugiat
              et turpis. In maximus posuere elit, ut cursus ante finibus at.
              Suspendisse nec luctus neque, in
            </p>

            <div className="d-flex gap-5">
              <div className="d-flex gap-lg-2 gap-1 align-items-center">
                <Calender /> <p className="mb-0">October 20, 2020</p>
              </div>

              <div className="d-flex gap-lg-2 gap-1 align-items-center">
                <Comment /> <p className="mb-0">Comments (1)</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block blog-details-image">
            <div>
                <img src="/image/blog1.jpg" alt="blog1" />
            </div>

            <div>
                <img src="/image/blog2.jpg" alt="blog1" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
