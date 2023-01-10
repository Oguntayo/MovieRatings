import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import {
	Wrapper,
	Content,
	LogoImg,
	LoggedIn,
	TMDBLogoImg,
} from "./Header.styles";
// Context
import { Context } from "../../context";
import Button from "../Button";

const Header = () => {
	const [user, setUser] = useContext(Context);
	console.log(user);

	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={RMDBLogo} alt="rmdb-logo" />
				</Link>
				{user ? (
					<LoggedIn>
						<div>
							<span>Logged in as: {user.username}</span>
						</div>
						<div>
							<Button text="Log out" callback={() => setUser(undefined)} />
						</div>
					</LoggedIn>
				) : (
					<Link to="/login">
						<span>Log in</span>
					</Link>
				)}
				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	);
};

export default Header;
