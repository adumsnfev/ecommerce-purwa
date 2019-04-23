import React, { Component, Fragment } from 'react';
import ProductForm from './productForm';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            formData: {
                id: '',
                name: '',
                variants: [],
            }
        };
    }

    onNameChange = event => {
        event.persist();
        this.setState(state => ({
            formData: {
                ...state.formData,
                name: event.target.value,
            }
        }));
    };

    addVariant = () => {
        this.setState(state => ({
            formData: {
                ...state.formData,
                variants: [
                    ...state.formData.variants,
                    {
                        name: '',
                        images: [],
                        description: '',
                        weight: 0,
                        quantity: 0,
                        price: 0,
                        discount: 0,
                    }
                ]
            },
        }));
    };

    onVariantNameChange = index => event => {
        const { formData: { variants } } = this.state;
        variants[index].name = event.target.value;

        this.setState(state => {
            return {
                formData: {
                    ...state.formData,
                    variants
                }
            }
        });
    };

    onVariantWeightChange = index => event => {
        const { formData: { variants } } = this.state;
        variants[index].weight = event.target.value;

        this.setState(state => {
            return {
                formData: {
                    ...state.formData,
                    variants
                }
            }
        });
    };

    onVariantQuantityChange = index => event => {
        const { formData: { variants } } = this.state;
        variants[index].quantity = event.target.value;

        this.setState(state => {
            return {
                formData: {
                    ...state.formData,
                    variants
                }
            }
        });
    };

    onVariantPriceChange = index => event => {
        const { formData: { variants } } = this.state;
        variants[index].price = event.target.value;

        this.setState(state => {
            return {
                formData: {
                    ...state.formData,
                    variants
                }
            }
        });
    };

    onVariantDiscountChange = index => event => {
        const { formData: { variants } } = this.state;
        variants[index].discount = event.target.value;

        this.setState(state => {
            return {
                formData: {
                    ...state.formData,
                    variants
                }
            }
        });
    };

    deleteVariant = index => () => {
        const { formData : { variants } } = this.state
        variants.splice(index, 1)
        this.setState(state => ({
                formData: {
                    ...state.formData,
                    variants
                }
            }
        ))
    }

    render() {
        const { formData } = this.state;

        return (
            <Fragment>
                <ProductForm
                    data={formData}
                    onNameChange={this.onNameChange}
                    addVariant={this.addVariant}
                    deleteVariant={this.deleteVariant}
                    onVariantNameChange={this.onVariantNameChange}
                    onVariantWeightChange={this.onVariantWeightChange}
                    onVariantQuantityChange={this.onVariantQuantityChange}
                    onVariantPriceChange={this.onVariantPriceChange}
                    onVariantDiscountChange={this.onVariantDiscountChange}
                />
            </Fragment>
        );
    }
}

export default Product;