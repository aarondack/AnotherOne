import { h, Component } from 'preact';
import styled, { keyframes } from 'styled-components';

const LanguageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3em;
	width: 370px;
	height: 70px;
	align-items: center;
	box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
	border: 2px solid rgba(0, 0, 0, 0.1);
`;

const ProgrammingLanguage = styled.div`
	max-width: 50%;
	font-weight: bold;
`;

const Language = ({ programmingLanguage }) =>
	(<LanguageContainer>
		<ProgrammingLanguage>
			{programmingLanguage ? programmingLanguage.language : null}
		</ProgrammingLanguage>
	</LanguageContainer>);

export default Language;
