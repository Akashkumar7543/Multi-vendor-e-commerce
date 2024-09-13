// import { React, useEffect, useState } from "react";
// import CustomInput from "../components/CustomInput";
// import ReactQuill from "react-quill";
// import { useNavigate } from "react-router-dom";
// import "react-quill/dist/quill.snow.css";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { getBrands } from "../features/brand/brandSlice";
// import { getCategories } from "../features/pcategory/pcategorySlice";
// import { getColors } from "../features/color/colorSlice";
// import { Select } from "antd";
// import Dropzone from "react-dropzone";
// import { delImg, uploadImg } from "../features/upload/uploadSlice";
// import { createProducts, resetState } from "../features/product/producttSlice";
// let schema = yup.object().shape({
//   title: yup.string().required("Title is Required"),
//   description: yup.string().required("Description is Required"),
//   price: yup.number().required("Price is Required"),
//   brand: yup.string().required("Brand is Required"),
//   category: yup.string().required("Category is Required"),
//   tags: yup.string().required("Tag is Required"),
//   color: yup
//     .array()
//     .min(1, "Pick at least one color")
//     .required("Color is Required"),
//   quantity: yup.number().required("Quantity is Required"),
// });

// const Addproductt = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [color, setColor] = useState([]);
//   const [images, setImages] = useState([]);
//   console.log(color);
//   useEffect(() => {
//     dispatch(getBrands());
//     dispatch(getCategories());
//     dispatch(getColors());
//   }, []);

//   const brandState = useSelector((state) => state.brand.brands);
//   const catState = useSelector((state) => state.pCategory.pCategories);
//   const colorState = useSelector((state) => state.color.colors);
//   const imgState = useSelector((state) => state.upload.images);
//   const newProduct = useSelector((state) => state.product);
//   const { isSuccess, isError, isLoading, createdProduct } = newProduct;
//   useEffect(() => {
//     if (isSuccess && createdProduct) {
//       toast.success("Product Added Successfullly!");
//     }
//     if (isError) {
//       toast.error("Something Went Wrong!");
//     }
//   }, [isSuccess, isError, isLoading]);
//   const coloropt = [];
//   colorState.forEach((i) => {
//     coloropt.push({
//       label: i.title,
//       value: i._id,
//     });
//   });
//   const img = [];
//   imgState.forEach((i) => {
//     img.push({
//       public_id: i.public_id,
//       url: i.url,
//     });
//   });

//   useEffect(() => {
//     formik.values.color = color ? color : " ";
//     formik.values.images = img;
//   }, [color, img]);
//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       price: "",
//       brand: "",
//       category: "",
//       tags: "",
//       color: "",
//       quantity: "",
//       images: "",
//     },
//     validationSchema: schema,
//     onSubmit: (values) => {
//       dispatch(createProducts(values));
//       formik.resetForm();
//       setColor(null);
//       setTimeout(() => {
//         dispatch(resetState());
//       }, 3000);
//     },
//   });
//   const handleColors = (e) => {
//     setColor(e);
//     console.log(color);
//   };
//   return (
//     <div>
//       <h3 className="mb-4 title">Add Product</h3>
//       <div>
//         <form
//           onSubmit={formik.handleSubmit}
//           className="d-flex gap-3 flex-column"
//         >
//           <CustomInput
//             type="text"
//             label="Enter Product Title"
//             name="title"
//             onChng={formik.handleChange("title")}
//             onBlr={formik.handleBlur("title")}
//             val={formik.values.title}
//           />
//           <div className="error">
//             {formik.touched.title && formik.errors.title}
//           </div>
//           <div className="">
//             <ReactQuill
//               theme="snow"
//               name="description"
//               onChange={formik.handleChange("description")}
//               value={formik.values.description}
//             />
//           </div>
//           <div className="error">
//             {formik.touched.description && formik.errors.description}
//           </div>
//           <CustomInput
//             type="number"
//             label="Enter Product Price"
//             name="price"
//             onChng={formik.handleChange("price")}
//             onBlr={formik.handleBlur("price")}
//             val={formik.values.price}
//           />
//           <div className="error">
//             {formik.touched.price && formik.errors.price}
//           </div>
//           <select
//             name="brand"
//             onChange={formik.handleChange("brand")}
//             onBlur={formik.handleBlur("brand")}
//             value={formik.values.brand}
//             className="form-control py-3 mb-3"
//             id=""
//           >
//             <option value="">Select Brand</option>
//             {brandState.map((i, j) => {
//               return (
//                 <option key={j} value={i.title}>
//                   {i.title}
//                 </option>
//               );
//             })}
//           </select>
//           <div className="error">
//             {formik.touched.brand && formik.errors.brand}
//           </div>
//           <select
//             name="category"
//             onChange={formik.handleChange("category")}
//             onBlur={formik.handleBlur("category")}
//             value={formik.values.category}
//             className="form-control py-3 mb-3"
//             id=""
//           >
//             <option value="">Select Category</option>
//             {catState.map((i, j) => {
//               return (
//                 <option key={j} value={i.title}>
//                   {i.title}
//                 </option>
//               );
//             })}
//           </select>
//           <div className="error">
//             {formik.touched.category && formik.errors.category}
//           </div>
//           <select
//             name="tags"
//             onChange={formik.handleChange("tags")}
//             onBlur={formik.handleBlur("tags")}
//             value={formik.values.tags}
//             className="form-control py-3 mb-3"
//             id=""
//           >
//             <option value="" disabled>
//               Select Category
//             </option>
//             <option value="featured">Featured</option>
//             <option value="popular">Popular</option>
//             <option value="special">Special</option>
//           </select>
//           <div className="error">
//             {formik.touched.tags && formik.errors.tags}
//           </div>

//           <Select
//             mode="multiple"
//             allowClear
//             className="w-100"
//             placeholder="Select colors"
//             defaultValue={color}
//             onChange={(i) => handleColors(i)}
//             options={coloropt}
//           />
//           <div className="error">
//             {formik.touched.color && formik.errors.color}
//           </div>
//           <CustomInput
//             type="number"
//             label="Enter Product Quantity"
//             name="quantity"
//             onChng={formik.handleChange("quantity")}
//             onBlr={formik.handleBlur("quantity")}
//             val={formik.values.quantity}
//           />
//           <div className="error">
//             {formik.touched.quantity && formik.errors.quantity}
//           </div>
//           <div className="bg-white border-1 p-5 text-center">
//             <Dropzone
//               onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
//             >
//               {({ getRootProps, getInputProps }) => (
//                 <section>
//                   <div {...getRootProps()}>
//                     <input {...getInputProps()} />
//                     <p>
//                       Drag 'n' drop some files here, or click to select files
//                     </p>
//                   </div>
//                 </section>
//               )}
//             </Dropzone>
//           </div>
//           <div className="showimages d-flex flex-wrap gap-3">
//             {imgState?.map((i, j) => {
//               return (
//                 <div className=" position-relative" key={j}>
//                   <button
//                     type="button"
//                     onClick={() => dispatch(delImg(i.public_id))}
//                     className="btn-close position-absolute"
//                     style={{ top: "10px", right: "10px" }}
//                   ></button>
//                   <img src={i.url} alt="" width={200} height={200} />
//                 </div>
//               );
//             })}
//           </div>
//           <button
//             className="btn btn-success border-0 rounded-3 my-5"
//             type="submit"
//           >
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addproductt;
// AddProductForm.js

// ProductForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-hot-toast"
import { FaClipboardList } from "react-icons/fa";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import './product.css';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const Addproductt = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('category', category);

        try {
            await axios.post('http://localhost:4000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Successfully AddProduct');
            // Clear the form fields after successful submission
            setName('');
            setPrice('');
            setDescription('');
            setImage(null);
            setCategory('');
        } catch (error) {
            console.error(error);
            toast.success('Successfully AddProduct');
        }
    };

    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">VD</span>
            <span className="lg-logo">VENDOR DHASHBOARD</span>
          </h2>
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
         
        </Header>
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="mb-4">Add New Product</h1>
           
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="productName" className="form-label">Name of product:</label>
                        <input type="text" className="form-control" id="productName"  placeholder="Name of product" value={name} onChange={(e) => setName(e.target.value)} required />
               
                </div>
                <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Price:</label>
                        <input type="number" className="form-control" id="productPrice" placeholder="Price of Product"  value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
            <div className="mb-3">
                 <label htmlFor="productCategory" className="form-label">Category</label>
                     <input 
                      
                        type="text"
                        className="form-control" 
                        
                        list="datalistOptions" 
                        id="productCategory" 
                        placeholder="Add Category"
                        value={category} onChange={(e) => setCategory(e.target.value)} required
                    />
                 <datalist id="datalistOptions">
                    <option value="Mobiles, Computers " />
                    <option value="TV, Appliances, Electronics" />
                    <option value="Men's Fashion" />
                    <option value="Women's Fashion" />
                   <option value="Fashion" />
                 </datalist>
            </div>
                    <div className="mb-3">
                        <label htmlFor="productDescription" className="form-label">Description:</label>
                        <textarea className="form-control" id="productDescription" placeholder="Description of Product"value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">Image:</label>
                        <input type="file" className="form-control" id="productImage" placeholder="Image of Product" onChange={(e) => setImage(e.target.files[0])} required />
                    </div>
             
                <button type="submit" class="btn btn-outline-success">Add Product</button>
                
            </form>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default Addproductt;

