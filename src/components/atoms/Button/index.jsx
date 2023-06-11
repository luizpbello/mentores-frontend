import React from 'react';
import {
	ButtonDefault,
	ButtonForm,
	ButtonFormVariant,
	ButtonVariant,
} from './style';

export default function Button({content, btnRole, disabled, onClick }) {
	if (btnRole === 'primary') return <ButtonDefault>{content}</ButtonDefault>;

	if (btnRole === 'secondary')
		return <ButtonVariant type='button'>{content}</ButtonVariant>;

	if (btnRole === 'formSecondary')
		return (
			<ButtonFormVariant
				onClick={onClick}
				type='button'>
				{content}
			</ButtonFormVariant>
		);

	if (btnRole === 'form')
		return (
			<ButtonForm
				type='submit'
				disabled={disabled}>
				{content}
			</ButtonForm>
		);
}
