import React from 'react';
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "@/components/alert/alert";

describe('Test suit for alert component', () => {

    beforeEach(() => {
        render(<Alert modalId='prueba_modal_cerrar'/>);
    });

    it('should render propertly', () => {
        const elementt = screen.getByTestId('alert-component-id-test');
        expect(elementt).toHaveClass('row justify-content-center align-items-center');
    });

    it('should close the modal', () => {
        Alert.prototype.closeModal();
        const modal = document.getElementById('prueba_modal_cerrar');
        expect(modal.style.display).toBe('none');
    });
});