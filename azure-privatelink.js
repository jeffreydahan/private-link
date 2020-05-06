function convertTLVstring(r) { 
    var tlv_value = r.variables.proxy_protocol_tlv_0xEE 
    tlv_value = tlv_value.slice(1) 
    var value = 0; 
    for (var i = tlv_value.length - 1; i >=0; i--) { value *= 256; value += tlv_value.charCodeAt(i); } 
    return value; 
}
