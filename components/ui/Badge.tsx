import styled from 'styled-components/native';

const Badge = styled.View<{ type?: string }>`
  width: 73px;
  flex-direction: row;
  height: 24px;
  background-color: ${(p) => (p.type === 'success' ? p.theme.colors.green_light : p.theme.colors.red_light)};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export default Badge;
