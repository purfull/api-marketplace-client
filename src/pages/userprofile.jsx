import { React, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "../css/pages/userprofile.scss"
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    // const [formData, setFormData] = useState({
    //     // id: "",
    //     name: "",
    //     email: "",
    //     phone: "",
    //     address: "",
    //     country: "",
    //     zip_code: "",

    // })

    // const token = localStorage.getItem("accessToken");
    // console.log(token, "accessToken");


    //   const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value
    //     });
    //   };

    //   const Updatesumbit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const payload = {
    //         // "id": formData.id,
    //         "name": formData.name,
    //         "email": formData.email,
    //         "phone": formData.phone,
    //         "Address": formData.address,
    //         "country": formData.country,
    //         "address": formData.address,
    //         "zip_code": formData.zip_code
    //       }
    //       await dispatch(updatecustomers(payload)).unwrap();
    //       console.log(payload, "payload in userprofile");
    //     } catch (err) {
    //       console.log(err, "getting error to uodate proifle ");
    //     }
    //   }

    return (
        <div className="user-wrapper">
            <div className="account-header">
                <span className="account-title">My Account</span>
                <p className="account-description">
                    Manage your account settings and preferences.
                </p>
            </div>

            <div className="profile-card" >
                <span className="profile-title">Profile</span>

                <Form >
                    <div className="profile-inputs">
                        <div className="form-group">
                            <p className="input-label">Name *</p>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: "Please input your name!" }]}
                            >
                                <Input placeholder="Name" className="form-input" />
                            </Form.Item>
                        </div>

                        <div className="form-group">
                            <p className="input-label">Email *</p>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: "Please input your email!" },
                                ]}
                            >
                                <Input placeholder="Email" className="form-input" />
                            </Form.Item>
                        </div>

                        <div className="form-group">
                            <p className="input-label">Phone Number *</p>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your mobile number!",
                                    },
                                ]}
                            >
                                <Input placeholder="Phone Number" className="form-input" />
                            </Form.Item>
                        </div>

                        <div className="form-group">
                            <p className="input-label">Address *</p>
                            <Form.Item
                                name="address"
                                rules={[
                                    { required: true, message: "Please input your address!" },
                                ]}
                            >
                                <Input placeholder="Address" className="form-input" />
                            </Form.Item>
                        </div>

                        <div className="form-group">
                            <p className="input-label">purpsoe *</p>
                            <Form.Item
                                name="purpose"
                                rules={[
                                    { required: true, message: "Please input your zip code!" },
                                ]}
                            >
                                <Input placeholder="Purpose" className="form-input" />
                            </Form.Item>
                        </div>

                        <div className="form-group">
                            <p className="input-label">Country *</p>
                            <Form.Item
                                name="country"
                                rules={[
                                    { required: true, message: "Please input your country!" },
                                ]}
                            >
                                <Input placeholder="Country" className="form-input" />
                            </Form.Item>
                        </div>

                        {/* Submit Button */}
                        <div className="update-profile-button">
                            <Button className="primary-button" htmlType="submit">
                                Update Profile
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UserProfile;
