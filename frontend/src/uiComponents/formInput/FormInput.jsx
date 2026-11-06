import { Input } from "antd"

const FormInput = ({
    name,
    placeholder,
    type,
    label,
    onChange,
    onBlur,
    className,
    value,
    ...props
}) => {
    return (
        <Input
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            className={className}
            onBlur={onBlur}
            value={value}
            {...props}
        ></Input>
    )
}

export default FormInput