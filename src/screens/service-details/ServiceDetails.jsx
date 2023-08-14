import React from "react";
import "./service-details.css";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { HeroSecondary } from "../../components";
import { DoubleArrow } from "../../assets/SVG";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <Layout>
      <HeroSecondary title={"Services"} />

      <div className="container py-lg-5 py-3 ">
        <h1 className="text-center page-heading">
          {id.charAt(0).toUpperCase() + id.slice(1)} Insurance
        </h1>
        <p className="text-center page-sub-heading">
          Financial backup for all your medical emergencies
        </p>

        <div>
          <div className="row">
            <div className="col-lg-6 col-12 service-details-image">
              <img src="/image/service-details-image.png" alt="service-image" />
            </div>
            <div className="col-lg-6 col-12 service-details-text-box">
              <h2>Secure Your Pet With Pet Insurance</h2>
              <p>
                In India, people tend to call themselves pet parents rather than
                pet owners as they consider pets as their own family members.
                When you are a pet parent, you need to protect and safeguard
                them like a responsible parent as well; for that having a pet
                insurance plan is very important to offer your pet all-around
                protection.
              </p>
              <p>
                Keeping your pet healthy and safe may prove to be expensive for
                you as there are several medical needs that your pet may require
                such as vaccination, tick treatment, grooming, wound treatment,
                and other medical emergencies. The vet fees, para-vet charges,
                and other subsequent medical and surgical costs are
                sky-rocketing due to inflation. There comes the pet insurance
                plan in rescue that offers you the best medical and legal
                assistance if you face such an unexpected, and unfortunate
                situation.
              </p>
            </div>
          </div>

          <h1
            className="text-center page-heading mt-4"
            style={{ color: "#333" }}
          >
            Benefits Of Pet Insurance Plans?
          </h1>
          <p className="text-center">
            In India, pet insurance plans are gaining popularity due to their
            unique features, usefulness, and importance. It has come up with a
            sack full of benefits to offer your pet a beautiful and healthy
            life. To know more about its advantages and features, have a look at
            the below mentions.
          </p>

          <div className="service-details-list">
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>

          <h1
            className="text-center page-heading mt-4"
            style={{ color: "#333" }}
          >
            Different Types Of Pet Insurance
          </h1>
          <p className="text-center">
            In India, the insurance companies have seen offering cattle and
            livestock insurance plans for many years, but now, many insurers
            have come forward to offer pet insurance plans keeping in mind their
            needs of them. Cattle and livestock insurance plans are for those
            animals that are used for commercial purposes, whereas pet insurance
            plans are totally for precious fur babies. There are different types
            of pet insurance plans that are available in India. Let’s have a
            look at some of them.
          </p>

          <div className="service-details-list">
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const List = ({ item }) => (
  <div className="d-flex gap-2 mb-4">
    <div>
      <DoubleArrow />
    </div>

    <div>
      <h3 className="mb-0">Customizable Plans</h3>
      <p className="mb-0">
        Most of the insurers that offer pet insurance plans are flexible enough
        to allow you to customize the plan for your dog, cat, birds, etc. as per
        your requirements.
      </p>
    </div>
  </div>
);

export default ServiceDetails;
