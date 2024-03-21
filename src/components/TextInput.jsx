import { Text, TextField } from "@shopify/polaris";
import React from "react";
import { Controller } from "react-hook-form";

export const TextInput = ({
	control,
	name,
	label,
	placeholder,
	type = "text",
	required,
	errors,
	isArray,
}) => {
	return (
		<div>
			<Controller
				control={control}
				name={name}
				rules={{ required: required ?? "" }}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<TextField
						label={label}
						type={type}
						placeholder={placeholder}
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						ref={ref}
					/>
				)}
			/>
			{required && !isArray && (
				<Text tone='critical'>{errors[name]?.message}</Text>
			)}
		</div>
	);
};
