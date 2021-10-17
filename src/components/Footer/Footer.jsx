import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>E Commerce</Logo>
				<Desc>
					E Commerce is the perfect solution for my ecommerce website, which both easy to build and easy to maintain.
					<br />
					<br />
					<span style={{ fontSize: "30px" }}>Aryan Bindal</span> (FOUNDER OF E Commerce)
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook onClick={() => window.open("https://www.facebook.com/aryan.bindal.1604", "_blank")} />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram onClick={() => window.open("https://www.instagram.com/aryan__bindal/", "_blank")} />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter onClick={() => window.open("https://twitter.com/AryanBindal8", "_blank")} />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>HOME</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>MEN'S CLOTHING</ListItem>
					<ListItem>My Account </ListItem>
					<ListItem>ELECTRONICS</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>WOMEN'S CLOTHING</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>JEWELERY </ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 4, Vishwa Enclave Mohkampur , Meerut Uttar Pradesh, 250002
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +91 123456789
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> contact@ecommerce.in
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;