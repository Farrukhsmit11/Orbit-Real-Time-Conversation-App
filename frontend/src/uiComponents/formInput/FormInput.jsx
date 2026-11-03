import { Input } from "antd"

const FormInput = ({
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
        <Input
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
        ></Input>
    )
}

export default FormInput