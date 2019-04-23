import React, { PureComponent, Fragment } from 'react';

class ProductForm extends PureComponent {
    constructor() {
        super();
        this.state = {
            hasVariant: null,
        }
    }

    setHasVariant = hasVariant => () => {
        this.setState({ hasVariant });
        this.props.addVariant();
    }

    render() {
        const {
            data: {
                name,
                variants
            },
            onNameChange,
            onVariantNameChange,
            onVariantWeightChange,
            onVariantQuantityChange,
            onVariantPriceChange,
            onVariantDiscountChange,
            deleteVariant,
        } = this.props;
        const { hasVariant } = this.state;

        return (
            <form encType="multipart/form-data">
            {/* name */}
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={onNameChange} />
                <br />
                {
                    (hasVariant === null || hasVariant === true) && (
                        <Fragment>
                            {/* button add variant */}
                            <button type="button" onClick={this.setHasVariant(true)}>Add Variant</button>
                            {hasVariant === null &&
                                <button type="button" onClick={this.setHasVariant(false)}>Product Has No Variant</button>}
                            <br />
                        </Fragment>
                    )
                }
                {variants.length > 0 &&
                    variants.map(({ name,weight,quantity,price,discount }, index) => (
                        <Fragment key={index}>
                            {hasVariant && <h3>Variant {name}</h3>}
                            <button type ="button" onClick={deleteVariant(index)}>Del</button>
                            {/* variant name */}
                            <br />
                            <label htmlFor={`variantName${index}`}>Variant Name</label>
                            <input
                                type="text"
                                id={`variantName${index}`}
                                value={name}
                                onChange={onVariantNameChange(index)}
                            />
                            <br />
                            {/* weight */}
                            <br />
                            <label htmlFor={`variantWeight${index}`}>Weight</label>
                            <input
                                type="number"
                                id={`variantWeight${index}`}
                                value={weight}
                                onChange={onVariantWeightChange(index)}
                            />grams
                            <br />
                            {/* quantity */}
                            <br />
                            <label htmlFor={`variantQuantity${index}`}>Quantity</label>
                            <input
                                type="number"
                                id={`variantQuantity${index}`}
                                value={quantity}
                                onChange={onVariantQuantityChange(index)}
                            />pieces
                            <br />
                            {/* price */}
                            <br />
                            <label htmlFor={`variantPrice${index}`}>Price</label>
                            <input
                                type="number"
                                id={`variantPrice${index}`}
                                value={price}
                                onChange={onVariantPriceChange(index)}
                            />IDR
                            <br />{/* discount */}
                            <br />
                            <label htmlFor={`variantDiscount${index}`}>Discount</label>
                            <input
                                type="number"
                                id={`variantDiscount${index}`}
                                value={discount}
                                onChange={onVariantDiscountChange(index)}
                            />IDR
                            <br />
                        </Fragment>
                    ))
                }
            </form>
        )
    }
}

export default ProductForm; //coba git