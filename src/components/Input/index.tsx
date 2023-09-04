import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components/native';

interface PropsInput extends TextInputProps {
  ref?: React.RefObject<TextInput>;
}

export function Input({ ref, ...rest }: PropsInput) {
  const { COLORS } = useTheme();

  return <Container {...ref} placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
