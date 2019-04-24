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
            onVariantDescriptionChange,
            deleteVariant,
        } = this.props;
        const { hasVariant } = this.state;

        return (
            <form encType="multipart/form-data">
            {/* name */}
                <table border="solid">
                <tr>
                <td><label htmlFor="name">Product Name</label></td>
                <td><input type="text" id="name" placeholder="Add Product Name" value={name} onChange={onNameChange} /></td>
                </tr>
                <tr>
                    <td>
                        <br />
                    </td>
                    <td>
                        <br />
                    </td>
                </tr>
                <tr>
                {
                    (hasVariant === null || hasVariant === true) && (
                        <Fragment>
                            {/* button add variant */}
                            <td><button type="button" onClick={this.setHasVariant(true)}>Add Variant</button></td>
                            {hasVariant === null &&
                            <td><button type="button" onClick={this.setHasVariant(false)}>No Variant</button></td>}
                        </Fragment>
                    )
                }
                </tr>
                </table>
                {variants.length > 0 &&
                    variants.map(({ name,weight,quantity,price,discount,description }, index) => (
                        <Fragment key={index}>
                            {hasVariant && <h3>Variant {name}</h3>}
                            <table border="solid">
                            <th colSpan="2">
                            <button type ="button" onClick={deleteVariant(index)}>Delete Menu Variant</button>
                            </th>
                                                            
                            {/* variant name */}
                            <tr>
                            <td><label htmlFor={`variantName${index}`}>Variant Name</label></td>
                            <td>
                            <input
                                type="text"
                                placeholder="Add Variant Name"
                                id={`variantName${index}`}
                                value={name}
                                onChange={onVariantNameChange(index)}
                            />
                            </td>
                            </tr>

                            {/* weight */}
                            <tr>
                            <td><label htmlFor={`variantWeight${index}`}>Weight</label></td>
                            <td>
                            <input
                                type="number"
                                id={`variantWeight${index}`}
                                value={weight}
                                onChange={onVariantWeightChange(index)}
                            />grams
                            </td>
                            </tr>

                            {/* quantity */}
                            <tr>
                            <td><label htmlFor={`variantQuantity${index}`}>Quantity</label></td>
                            <td>
                            <input
                                type="number"
                                id={`variantQuantity${index}`}
                                value={quantity}
                                onChange={onVariantQuantityChange(index)}
                            />pieces
                            </td>
                            </tr>

                            {/* price */}
                            <tr>
                            <td><label htmlFor={`variantPrice${index}`}>Price</label></td>
                            <td>
                            <input
                                type="number"
                                id={`variantPrice${index}`}
                                value={price}
                                onChange={onVariantPriceChange(index)}
                            />IDR
                            </td>
                            </tr>

                            {/* discount */}
                            <tr>
                            <td><label htmlFor={`variantDiscount${index}`}>Discount</label></td>
                            <td>
                            <input
                                type="number"
                                id={`variantDiscount${index}`}
                                value={discount}
                                onChange={onVariantDiscountChange(index)}
                            />IDR
                            </td>
                            </tr>

                            {/* description */}
                            <tr>
                            <td><label htmlFor={`variantDescription${index}`}>Description</label></td>
                            <td>
                            <textarea
                                rows="10"
                                cols="18"
                                placeholder="Add Description"
                                id={`variantDescription${index}`}
                                value={description}
                                onChange={onVariantDescriptionChange(index)}
                            />
                            </td>
                            </tr>
                            </table>
                        </Fragment>
                    ))
                }
            </form>
        )
    }
}

export default ProductForm; //coba git