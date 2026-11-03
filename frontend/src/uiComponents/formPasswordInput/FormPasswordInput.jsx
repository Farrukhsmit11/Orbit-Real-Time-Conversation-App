import { Input } from 'antd'

const FormPasswordInput = ({
    name,
    placeholder,
    type,
    label,
    onChange,
    onBlur,
    value,
    ...props
}) => {
    return (
        <Input.Password
            name={name}
            placeholder={placeholder}
            type={type}
            label={label}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
        />
    )
}

export default FormPasswordInput