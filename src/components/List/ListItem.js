import styled from 'styled-components';

const ListItem = styled.li`
	display: ${(props) => (props.inline ? 'inline' : 'block')};
	margin-left: ${(props) => (props.inline ? '1rem' : '0')};
	font-size: 130%;

	a {
		color: #4ab19a;
		text-decoration: none;
		&:hover {
			color: #1e836c;
		}
	}
`;

export default ListItem;
