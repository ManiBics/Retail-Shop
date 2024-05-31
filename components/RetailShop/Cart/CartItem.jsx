import { IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { optionFrom1ToN } from "@/utils";
import { Select } from "@mui/joy";

const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  const quantity = item?.quantity || 1;
  const getOptions = optionFrom1ToN(
    item?.variant?.availability?.availableQuantity
  );
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-md my-2">
      <div className="flex items-center">
        <img
          className="w-16 h-16 object-cover rounded-md"
          src={item.productImage.src}
          alt={item.productImage.src}
          data-sb-object-id={item.productImage.id}
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{item.productTitle1}</h2>
          <p className="text-sm text-gray-600 line-clamp-1">
            {item.productDescription}
          </p>
          <div className="mt-2">
            {getOptions.length > 1 ? (
              <Select
                color="primary"
                placeholder="Quantity"
                onChange={(event, newValue) => {
                  updateItemQuantity(item.id, newValue, item?.pricevalue);
                }}
                value={quantity}
                className="w-28"
              >
                {getOptions}
              </Select>
            ) : (
              <Typography color="error">Out of Stock</Typography>
            )}
          </div>
        </div>
      </div>
      <div className="text-right h-full flex flex-col">
        <div>
          <IconButton
            onClick={() => removeItem(item.id)}
            color="error"
            aria-label="delete"
          >
            <ClearIcon />
          </IconButton>
        </div>

        <p className="text-lg font-semibold mt-auto">
          ${(item?.price?.value?.centAmount / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
export default CartItem;
