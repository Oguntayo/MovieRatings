import styled from "styled-components";

export const Wrapper = styled.div`
	background: rgba(0, 0, 0, 0.7);
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 100px auto;
	max-width: 320px;
	height: 400px;
	padding: 20px;
	color: var(--white);

	input {
		width: 100%;
		height: 40px;
		border: 1px solid var(--darkGrey);
		border-radius: 20px;
		margin: 10px 0;
		padding: 10px;
	}

	.error {
		color: red;
	}
`;
