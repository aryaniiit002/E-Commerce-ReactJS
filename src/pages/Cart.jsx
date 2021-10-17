import React from "react";

import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { useSelector } from "react-redux";
// import { removeFromCart } from "../../redux/actions/productsActions";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin-bottom : 20px ;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
	const cartProducts = useSelector((state) => state.cartProducts);
	// const dispatch = useDispatch();

	// const handleRemoveCart = (product) => {
	//     dispatch(removeFromCart(product));
	//     alert("Item Removed")
	// };

	let total = 0;

	const renderCartProducts = cartProducts.map((product) => {
		const { title, image, price, category, rating } = product;
		total = total + price;
		console.log(total);
		return (
			<>
				<Product>
					<ProductDetail>
						<Image src={image} />
						<Details>
							<ProductName>
								<b>Product:</b> {title}
							</ProductName>
							<ProductId>
								<b>Rating:</b> {rating.rate}
							</ProductId>
							<ProductSize>
								<b>Category:</b> {category}
							</ProductSize>
						</Details>
					</ProductDetail>
					<PriceDetail>
						<ProductAmountContainer>
							<Add />
							<ProductAmount>1</ProductAmount>
							<Remove />
						</ProductAmountContainer>
						<ProductPrice>$ {price}</ProductPrice>
					</PriceDetail>
				</Product>
				<Hr />
			</>
		);
	});

	return (
		<Container>
			<Navbar />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Link to="/"><TopButton>CONTINUE SHOPPING</TopButton></Link>
					<TopTexts>
						<TopText>Shopping Bag({cartProducts.length})</TopText>
						<TopText>Your Wishlist (4)</TopText>
					</TopTexts>
				</Top>
				<Bottom>
					<Info>
						{renderCartProducts}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.9</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ 5.9</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {total}</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;